/*
import { COMPILER_OPTIONS, Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseService {

constructor(private sqlite: SQLite) { }

  public getDb(){
    return this.sqlite.create({
      name: 'teste.db',
      location: 'C:\Program Files\Sqlite\sqlite-tools-win32-x86-3380100\db'
    });
  }

  public createDb(){
    return this.getDb()
    .then((db: SQLiteObject) => {
      console.log("Iniciando conexão")
      // this.createTables(db);
      // this.insertDefaultItens(db);
    })
    .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject){
    db.sqlBatch([
      ["CREATE IF NOT EXISTS vendedor (ID_VENDEDOR INT PRIMARY KEY, NM_VEDEDOR VARCHAR(100))"],
      ["CREATE IF NOT EXISTS produtos (ID_PRODUTO INT PRIMARY KEY, DS_PRODUTO VARCHAR(100), PRC_PRODUTO DOUBLE)"]
    ])
    .then(() => console.log("Tables sucessfull"))
    .catch(e => console.log("ERRO tables ", e));
  }

  private insertDefaultItens(db: SQLiteObject){
    db.sqlBatch([
      ["INSERT INTO vendedor ('1', '1')"],
      ["INSERT INTO produtos ('1', '1', '1')"]
    ])
    .then(() => console.log("Inserção feita @#@"))
    .catch(e => console.log("Dados incorretos"))
  }
}
*/