import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWorkShops1646084035944 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'workshops',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar',
        },
        {
          name: 'speaker',
          type: 'varchar',
        },
        {
          name: 'speaker_organization',
          type: 'varchar',
        },
        {
          name: 'techs',
          type: 'varchar',
        },
        {
          name: 'event_time',
          type: 'timestamp',
        },
        {
          name: 'number_of_vocancies',
          type: 'int',
        },
        {
          name: 'create_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'event_id',
          type: 'integer',
        },
      ],
      foreignKeys: [
        {
          name: 'fk_event_id',
          columnNames: ['event_id'],
          referencedTableName: 'events',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workshops');
  }
}
