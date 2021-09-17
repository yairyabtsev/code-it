const {
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Location',
  description: 'This represent a user\'s location',
  fields: () => ({
    user_id: { type: new GraphQLNonNull(GraphQLString) },
    x: {type: new GraphQLNonNull(GraphQLFloat)},
    y: {type: new GraphQLNonNull(GraphQLFloat)},
    division: {type: new GraphQLNonNull(GraphQLFloat)},
  })
})