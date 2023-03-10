
defineField({
  type: 'array',
  name: 'body',
  title: 'Body',
  description:
    "This is where you can write the page's content. Including custom blocks like timelines for more a more visual display of information.",
 of: [
  {
    type: 'block',
    title: 'Block',
    marks: {
      annotations: [
        {
          name: 'internalLink',
          type: 'object',
          title: 'Internal link',
          fields: [
            {
              name: 'reference',
              type: 'reference',
              to: [{ type: 'page' }],
            },
            
      ],

  },
]
}
},
{
type: 'image',
options: {hotspot: true},
},
],

})
