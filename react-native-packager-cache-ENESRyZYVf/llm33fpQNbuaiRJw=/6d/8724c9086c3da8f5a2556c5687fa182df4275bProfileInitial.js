'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var InitialState = (0, _immutable.Record)({
  fetching: false,
  fetched: false,
  error: null,
  user: (0, _immutable.Record)({
    first_name: 'Түвшинбат',
    last_name: 'Гансүх',
    avatar_url: 'https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-1/p160x160/12733965_1022408714486124_4791379202953934223_n.jpg?oh=7c86230af139101b4637f39d1f8c7bfc&oe=59BD757F',
    geru_point: 100,
    bids_count: 6,
    portfolio_count: 14,
    tag_count: 3
  })(),

  allBookmarks: (0, _immutable.Record)({
    fetching: false,
    tags: [{
      name: 'Dress'
    }, {
      name: 'Shoes'
    }, {
      name: 'Book'
    }, {
      name: 'Deel'
    }],
    bookmarks: []
  })(),


  lastBookmarks: (0, _immutable.Record)({
    fetching: false,
    bookmarks: [{
      cover_url: "https://s-media-cache-ak0.pinimg.com/564x/62/2d/1a/622d1a7c04d689a3714d594e925b3108.jpg"
    }, {
      cover_url: "https://s-media-cache-ak0.pinimg.com/564x/ac/9e/65/ac9e657b32006d7542b834be8c5e9e8b.jpg"
    }, {
      cover_url: "https://s-media-cache-ak0.pinimg.com/564x/a1/e8/c5/a1e8c56d0c619f3e51e686a3b407e892.jpg"
    }, {
      cover_url: "https://s-media-cache-ak0.pinimg.com/564x/76/dc/2e/76dc2e00e44f9efb223a0b7b43416dde.jpg"
    }]
  })(),

  workingOnProjects: [{
    name: 'Дээлэн палаж цэнхэр ороолготой',
    end_date: "Нөгөөдөр, 6-сар 12н 18:00",
    amount: 110000,
    cover: 'http://www.rio.mn/userFiles/gimage.php?code=OGABZ&image=1471848701.1291.jpg',
    milestones: {
      total: 2,
      success: 1
    },
    hirer: {
      first_name: 'Хулангоо',
      last_name: 'Амарсанаа',
      avatar_url: 'https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/13669689_709369609201338_3960784319997661097_n.jpg?oh=c52e03a480bc775e021026494985fd06&oe=59BB1A6F'
    }
  }, {
    name: 'Савлуур сандал',
    end_date: "6-сар 20н 18:00",
    amount: 110000,
    cover: 'http://cdn.trendir.com/wp-content/uploads/old/archives/2014/06/05/dangerous-curve-relaxer-one-rocking-chair-by-verner-panton-2.jpg',
    milestones: {
      total: 5,
      success: 4
    },
    hirer: {
      first_name: 'Идэрээ',
      last_name: 'Чикори',
      avatar_url: 'https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/16473405_1338472029547467_654648559679947763_n.jpg?oh=495e86fb86efe7ef717074548f0306aa&oe=59B9DC14'
    }
  }],

  biddedProjects: [{
    name: "Торгон хантааз",
    award_time: "",
    bids_count: 12,
    bid_price: 90000,
    end_date: "Өнөөдөр 12:10"
  }, {
    name: "Дээр үеийн хамбан дээл оёуулья",
    award_time: "",
    bids_count: 39,
    bid_price: 120000,
    end_date: "Маргааш 12:10"
  }, {
    name: "Торгон хантааз",
    award_time: "",
    bids_count: 12,
    bid_price: 90000,
    end_date: "Нөгөөдөр 12:10"
  }, {
    name: "I need you to develop some software for me.",
    award_time: "",
    bids_count: 12,
    bid_price: 90000,
    end_date: " 6 сарын 12 12:10"
  }],

  historyProjects: [{
    id: 1,
    name: 'Хүүхдийн бүүвэйн сандал',
    end_date: "2017/05/19",
    price: 120000,
    hirer: {
      avatar_url: "https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-1/p50x50/13669689_709369609201338_3960784319997661097_n.jpg?oh=8fe2ead1ec7ac4e33e7e95301dd7d5aa&oe=59BF09CC",
      first_name: 'Хулангоо',
      last_name: 'Амарсанаа'
    },
    recommended: true,
    feedback: 5
  }, {
    id: 2,
    name: 'Валинтений бэлэг шоколадтай',
    end_date: "2017/05/19",
    price: 30000,
    hirer: {
      avatar_url: "https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-1/p50x50/13669689_709369609201338_3960784319997661097_n.jpg?oh=8fe2ead1ec7ac4e33e7e95301dd7d5aa&oe=59BF09CC",
      first_name: 'Хулангоо',
      last_name: 'Амарсанаа'
    },
    recommended: false,
    feedback: 4.5
  }, {
    id: 3,
    name: 'Ханын самбар шохойн болон маркертай',
    end_date: "2017/05/19",
    price: 90000,
    hirer: {
      avatar_url: "https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-1/p50x50/13669689_709369609201338_3960784319997661097_n.jpg?oh=8fe2ead1ec7ac4e33e7e95301dd7d5aa&oe=59BF09CC",
      first_name: 'Хулангоо',
      last_name: 'Амарсанаа'
    },
    recommended: true,
    feedback: 3
  }, {
    id: 4,
    name: 'Дээр үеийн хамбан дээл оёуулья',
    end_date: "2017.05.19",
    price: 120000,
    hirer: {
      avatar_url: "https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-1/p50x50/13669689_709369609201338_3960784319997661097_n.jpg?oh=8fe2ead1ec7ac4e33e7e95301dd7d5aa&oe=59BF09CC",
      first_name: 'Хулангоо',
      last_name: 'Амарсанаа'
    },
    recommended: true,
    feedback: 5
  }]
});

exports.default = InitialState;