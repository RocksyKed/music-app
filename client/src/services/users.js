const currentUser = {
  username: 'Alice',
  email: 'rocksy.ked@gmail.com',
  avatar: 'https://cdn3.iconfinder.com/data/icons/rcons-user-profession/32/student-girl-512.png',
  genres: [
    {
      id: 1,
      name: 'rock'
    },
    {
      id: 2,
      name: 'pop'
    },
    {
      id: 3,
      name: 'rap'
    }
  ],
  playlists: [
    {
      id: 1,
      genre: {
        id: 2,
        name: 'pop'
      },
      cover: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930',
      songs: [
        {
          id: 1,
          name: 'Song 1'
        },
        {
          id: 2,
          name: 'Song 2'
        },
        {
          id: 3,
          name: 'Song 3'
        }
      ]
    },
    {
      id: 2,
      genre: {
        id: 1,
        name: 'pop'
      },
      cover: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930',
      songs: [
        {
          id: 1,
          name: 'Song 1'
        },
        {
          id: 2,
          name: 'Song 2'
        },
        {
          id: 3,
          name: 'Song 3'
        }
      ]
    }
  ]
};