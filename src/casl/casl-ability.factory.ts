import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Type } from 'class-transformer';
import { Capteur } from 'src/capteur/entities/capteur.entity';
import { Champ } from 'src/champs/entities/champ.entity';
import { Culture } from 'src/culture/entities/culture.entity';
import { User, USER_ROLE } from 'src/user/entities/user.entity';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects =
  | InferSubjects<
      typeof User | typeof Type | typeof Capteur | typeof Culture | typeof Champ
    >
  | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(
      Ability as AbilityClass<AppAbility>,
    );

    if (user.role === USER_ROLE.ADMIN) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      // can(Action.Read, Type);
      can(Action.Read, User, { _id: user._id });
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
