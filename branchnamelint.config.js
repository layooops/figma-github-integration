module.exports = {
  pattern: ':type/:reference?/:description',
  params: {
    type: ['fix', 'hotfix', 'feat', 'feature', 'docs', 'test'],
    description: ['[a-z0-9-]+'],
    reference: ['fgi-[a-z0-9-]+'],
  },
  prohibited: [],
};
