const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'This represent a user',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  })
})