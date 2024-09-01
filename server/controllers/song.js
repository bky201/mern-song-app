import slugify from "slugify";
import Song from "../models/song.js";

export const welcome = (req, res) => {
    res.json({
        data: "hello from nodejs api routes and controllers...",
    });
};

export const create = async (req, res) => {
    try {
        const { title, artist, album, genre } = req.body;
        
        if (title == "") {
            return res.json({ error: "Title is required"});
        }
        if (artist == "") {
            return res.json({ error: "Artist is required"});
        }
        if (album == "") {
            return res.json({ error: "Album is required"});
        }
        if (genre == "") {
            return res.json({ error: "Genre is required"});
        }

        const song = await new Song({
            title,
            artist,
            album,
            genre,
            slug: slugify(`${title}-${artist}-${album}-${genre}`),
          }).save();
    
          res.json({
            song,
          });

    } catch (err) {
        console.log(err);
        res.json({ error: "Something went wrong. Try again."});
    }
};

export const songs = async (req, res) => {
    try {
        const allSongs = await Song.find().select("title artist album genre slug")
        .sort({ createdAt: -1 })
        .limit(12);

        res.json( allSongs );
        
    } catch (err) {
        console.log(err);
    }
};

export const read = async (req, res) => {
    try {
        const song = await Song.findOne({slug: req.params.slug}).populate("title", "title artist album genre");
        console.log(song);
        res.json({ song });
    } catch (err) {
        console.log(err);
    }
};

export const getSongStats = async (req, res) => {
    try {
        const totalSongs = await Song.aggregate([
          {
            '$group': {
              '_id': '$title'
            }
          }, {
            '$group': {
              '_id': 1, 
              'count': {
                '$sum': 1
              }
            }
          }
        ]);
        const totalArtists = await Song.aggregate([
          {
            '$group': {
              '_id': '$artist'
            }
          }, {
            '$group': {
              '_id': 1, 
              'count': {
                '$sum': 1
              }
            }
          }
        ]);
        const totalAlbum = await Song.aggregate([
          {
            '$group': {
              '_id': '$album'
            }
          }, {
            '$group': {
              '_id': 1, 
              'count': {
                '$sum': 1
              }
            }
          }
        ]);
        const totalGenre = await Song.aggregate([
          {
            '$group': {
              '_id': '$genre'
            }
          }, {
            '$group': {
              '_id': 1, 
              'count': {
                '$sum': 1
              }
            }
          }
        ]);

        const songsPerGenre = await Song.aggregate([
          {
            '$group': {
              '_id': '$genre', 
              'count': {
                '$sum': 1
              }
            }
          }, {
            '$unwind': {
              'path': '$_id'
            }
          }
        ]);

        const songsPerArtist = await Song.aggregate([
          {
            '$group': {
              '_id': '$artist', 
              'count': {
                '$sum': 1
              }
            }
          }
        ]);

        const albumsPerArtist = await Song.aggregate([
          {
            '$group': {
              '_id': {
                'album': '$album', 
                'artist': '$artist'
              }, 
              'count': {
                '$sum': 1
              }
            }
          }
        ]);

        const songsPerAlbum = await Song.aggregate([
          {
            '$group': {
              '_id': '$album', 
              'count': {
                '$sum': 1
              }
            }
          }
        ])

        res.json({
          totalArtists: totalArtists[0].count,
          totalSongs: totalSongs[0].count,
          totalAlbum: totalAlbum[0].count,
          totalGenre: totalGenre[0].count,
          songsPerGenre,
          songsPerArtist,
          albumsPerArtist,
          songsPerAlbum,
          });

    } catch (err) {
      console.log(err);
    }
};

export const editSong = async (req, res) => {
    try {
      const { title, artist, album, genre } = req.body;
  
      // validation
      if (title == "") {
        return res.json({ error: "Title is required"});
      }
      if (artist == "") {
        return res.json({ error: "Artist is required"});
      }
      if (album == "") {
        return res.json({ error: "Album is required"});
      }
      if (genre == "") {
        return res.json({ error: "Genre is required"});
      }

      const song = await Song.findById(req.params._id);
      await song.updateOne({
            ...req.body,
            slug: song.slug,
        });

        res.json({ ok: true });
      
    } catch (err) {
      console.log(err);
    }
  };

  export const remove = async (req, res) => {
    try {
      const song = await Song.findById(req.params._id);
  
      await Song.findByIdAndDelete(song._id);
      res.json({ ok: true });
    } catch (err) {
      console.log(err);
    }
  };