
import { Application, ApplicationConfig } from '@loopback/core';
import { RestComponent } from '@loopback/rest';
import { TodoController } from './controllers';
import { TodoRepository } from './repositories';
import { db } from './datasources/db.datasource';
import { DataSourceConstructor } from '@loopback/repository';

export class TodoApplication extends Application {

}
