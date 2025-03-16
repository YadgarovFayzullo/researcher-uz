export default {
  name: 'journal',
  title: 'Научный журнал',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название журнала',
      type: 'string',
      validation: (Rule: import('sanity').Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'string',
    },
    {
      name: 'vak',
      title: 'ВАК',
      type: 'boolean',
      description: 'Отметьте, если журнал входит в ВАК',
    },
    {
      name: 'coverImage',
      title: 'Обложка',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'stats',
      title: 'Статистика',
      type: 'object',
      fields: [
        {name: 'downloads', title: 'Скачиваний', type: 'number'},
        {name: 'views', title: 'Просмотров', type: 'number'},
        {name: 'totalArticles', title: 'Всего статей', type: 'number'},
      ],
    },
    {
      name: 'description',
      title: 'Описание журнала',
      type: 'text',
    },
    {
      name: 'publisher',
      title: 'Издательство',
      type: 'string',
    },
    {
      name: 'scienceFields',
      title: 'Область наук',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'issn',
      title: 'ISSN',
      type: 'object',
      fields: [
        {name: 'print', title: 'Печатный ISSN', type: 'string'},
        {name: 'electronic', title: 'Электронный ISSN', type: 'string'},
      ],
    },
    {
      name: 'year',
      title: 'Год выпуска',
      type: 'reference',
      to: [{type: 'journalYear'}],
      description: 'Выберите год выпуска',
    },
  ],
}
