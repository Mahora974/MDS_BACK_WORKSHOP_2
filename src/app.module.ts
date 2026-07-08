import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { RoleModule } from './modules/role/role.module';
import { NewsModule } from './modules/news/news.module';
import { BeProfessorForModule } from './modules/be-professor-for/be-professor-for.module';
import { TypeReportModule } from './modules/type-report/type-report.module';
import { TagModule } from './modules/tag/tag.module';
import { TypeTopicModule } from './modules/type-topic/type-topic.module';
import { CategoryModule } from './modules/category/category.module';
import { TypeEventModule } from './modules/type-event/type-event.module';
import { DegreeModule } from './modules/degree/degree.module';
import { SchoolsModule } from './modules/schools/schools.module';
import { UsersModule } from './modules/users/users.module';
import { ClassGroupsModule } from './modules/class-groups/class-groups.module';
import { ParkingsModule } from './modules/parkings/parkings.module';
import { CarpoolsModule } from './modules/carpools/carpools.module';
import { StudentCardsModule } from './modules/student-cards/student-cards.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { AuthSessionModule } from './modules/auth-session/auth-session.module';
import { TutorialModule } from './modules/tutorial/tutorial.module';
import { ForumTopicModule } from './modules/forum-topic/forum-topic.module';
import { EventModule } from './modules/event/event.module';
import { ForumMessageModule } from './modules/forum-message/forum-message.module';
import { TicketReportModule } from './modules/ticket-report/ticket-report.module';
import { WorkAtModule } from './modules/work-at/work-at.module';
import { BePassengerForModule } from './modules/be-passenger-for/be-passenger-for.module';
import { LinkForumTopicTagModule } from './modules/link-forum-topic-tag/link-forum-topic-tag.module';
import { LinkDegreeSchoolModule } from './modules/link-degree-school/link-degree-school.module';
import { BeNotifiedForModule } from './modules/be-notified-for/be-notified-for.module';
import { BeBorrowedByModule } from './modules/be-borrowed-by/be-borrowed-by.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    PrismaModule,
    RoleModule,
    NewsModule,
    BeProfessorForModule,
    TypeReportModule,
    TagModule,
    TypeTopicModule,
    CategoryModule,
    TypeEventModule,
    DegreeModule,
    SchoolsModule,
    UsersModule,
    ClassGroupsModule,
    ParkingsModule,
    CarpoolsModule,
    StudentCardsModule,
    EquipmentModule,
    AuthSessionModule,
    TutorialModule,
    ForumTopicModule,
    EventModule,
    ForumMessageModule,
    TicketReportModule,
    WorkAtModule,
    BePassengerForModule,
    LinkForumTopicTagModule,
    LinkDegreeSchoolModule,
    BeNotifiedForModule,
    BeBorrowedByModule,
    HttpModule.register({
      baseURL: process.env.HYPERPLANNING_URL, 
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
