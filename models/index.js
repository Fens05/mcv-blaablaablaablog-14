
const Post = require('./Post.js');
const User = require('./User.js');
const Comment = require('./Comment.js');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL',
});

module.exports = { User, Post, Comment };