import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';

import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Daily,
  Holiday,
  Leave,
  Meeting,
  Msg,
  Order,
  Remind,
  User,
  VoiceChannels,
  WorkFromHome,
  CompanyTrip,
  Opentalk,
  Uploadfile,
  CheckList,
  Subcategorys,
  BirthDay,
  Bwl,
  BwlReaction,
  CheckCamera,
  Conversation,
  Dating,
  GuildData,
  JoinCall,
  Keep,
  Penalty,
  Quiz,
  TimeVoiceAlone,
  TrackerSpentTime,
  TX8,
  UserQuiz,
  Wiki,
  WomenDay,
  Channel,
  Mentioned,
  Workout,
  IndividualChannel,
  EventEntity,
  ImportantSMS,
  WOL,
  Dynamic,
} from './models';
import { BotGateway } from './events/bot.gateway';
import { DailyCommand } from './asterisk-commands/commands/daily/daily.command';
import { Asterisk } from './asterisk-commands/asterisk';
import { WolCommand } from './asterisk-commands/commands/wol/wol.command';
import { UserInfoCommand } from './asterisk-commands/commands/user-info/userInfo.command';
import { UserStatusCommand } from './asterisk-commands/commands/user-status/userStatus.command';
import { UserStatusService } from './asterisk-commands/commands/user-status/userStatus.service';
import { ClientConfigService } from './config/client-config.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { TimeSheetService } from './services/timesheet.services';
import { AxiosClientService } from './services/axiosClient.services';
import { OrderCommand } from './asterisk-commands/commands/order/order.command';
import { WolCommandService } from './asterisk-commands/commands/wol/wol.services';
import { OrderCommandService } from './asterisk-commands/commands/order/order.services';
import { UtilsService } from './services/utils.services';
import { MeetingService } from './asterisk-commands/commands/meeting/meeting.services';
import { MeetingCommand } from './asterisk-commands/commands/meeting/meeting.command';
import { HelpCommand } from './asterisk-commands/commands/help/help.command';

// import { CronjobSlashCommand } from "./slash-commands/cronjob.slashcommand";

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    DiscoveryModule,
    TypeOrmModule.forFeature([
      BwlReaction,
      Bwl,
      Daily,
      Penalty,
      Order,
      Leave,
      Holiday,
      User,
      Meeting,
      VoiceChannels,
      WorkFromHome,
      Msg,
      Remind,
      Uploadfile,
      Opentalk,
      CompanyTrip,
      CheckList,
      Subcategorys,
      Channel,
      Daily,
      TX8,
      WomenDay,
      BirthDay,
      UserQuiz,
      Dating,
      JoinCall,
      CheckCamera,
      TrackerSpentTime,
      Conversation,
      TimeVoiceAlone,
      GuildData,
      Quiz,
      Keep,
      Wiki,
      Workout,
      Mentioned,
      IndividualChannel,
      EventEntity,
      ImportantSMS,
      WOL,
      Dynamic,
    ]),
    HttpModule,
  ],
  providers: [
    BotGateway,
    DailyCommand,
    WolCommand,
    WolCommandService,
    UserInfoCommand,
    UserStatusCommand,
    OrderCommand,
    OrderCommandService,
    MeetingCommand,
    MeetingService,
    HelpCommand,
    UserStatusService,
    ClientConfigService,
    ConfigService,
    Asterisk,
    TimeSheetService,
    UtilsService,
    AxiosClientService
  ],
  controllers: [],
})
export class BotModule {}
