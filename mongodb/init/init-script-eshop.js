db.createCollection('app_users', { capped: false });

db.app_users.insert([{
    "_id": {
      "$oid": "64ac075e649c0a93b2ec6e00"
    },
    "email": "pablo3tcr@hotmail.com",
    "password": "$2a$10$Vz163RmiVD9GGnbSJIsfYu1cYcnjNbes.7X04omOdEdxazZI/dzPK",
    "name": "Pablo",
    "cart": {
      "items": []
    },
    "images": [],
    "roles": [admin],
    "salt": "$2a$10$Vz163RmiVD9GGnbSJIsfYu",
    "__v": 0
  },{
    "_id": {
      "$oid": "64ad788b537c9eacd7b74f2f"
    },
    "email": "test@miroslavsmrtic.sk",
    "password": "test123456",
    "name": "usertest",
    "cart": {
      "items": []
    },
    "images": [],
    "roles": [admin],
    "salt": "$2a$10$Vz163RmiVD9GGnbSJIsfYu",
    "__v": 0
  }]);