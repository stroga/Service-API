## Running locally (tested on Win7 x64)
1. fetch repo and run
```sh
npm install
```
2. run in console in folder with fectched repo
```sh
npm run-script dev
```
3. install [PostgressSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) - installing set password *Password* 
4. install [Postgis](http://postgis.net/windows_downloads/)
5. install [pgAdmin](https://www.pgadmin.org/download/windows4.php)
6. open pgAdmin 3
7. create new database _database_development_
8. run in pgAdmin on newly created db
```sql
CREATE EXTENSION postgis;
```
9. to check if everything is ok open in browser http://localhost:9443/api, you should see 
```json
{
          "success": "ALL THE REST"
}
```
## API

**`GET`/api/users/:id**
----
  Returns json data about a single user.


*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```json
  {
    "driverId": 1,
    "username": "John Smith",
    "phone": 123456,
    "email": "test@test.com",
    "office": "address 1",
    "car": "bentley",
    "description": null,
    "photo": "url for photo",
    "session": "dfjgnjflglfdg,njk",
    "seats": 3,
    "createdAt": "2017-01-16T08:31:26.028Z",
    "updatedAt": "2017-01-16T08:31:26.028Z",
    "Rides": [
      {
        "rideId": 2,
        "date": null,
        "coordsFrom": "45.256,5.25",
        "coordsTo": "50.265,20.6534",
        "titleFrom": "some address 2",
        "titleTo": "address 3",
        "maxSeats": 3,
        "status": "active",
        "createdAt": "2017-01-16T09:22:07.157Z",
        "updatedAt": "2017-01-16T09:22:07.157Z",
        "UserDriverId": 1
      },
      {
        "rideId": 1,
        "date": null,
        "coordsFrom": "45.256,5.25",
        "coordsTo": "50.265,20.6534",
        "titleFrom": "some address 2",
        "titleTo": "address 3",
        "maxSeats": 2,
        "status": "finished",
        "createdAt": "2017-01-16T08:31:30.135Z",
        "updatedAt": "2017-01-16T08:31:30.135Z",
        "UserDriverId": 1
      }
    ],
    "Reservations": []
  }
```
 
* **Error Response:**
    **Content:** `invalid input syntax for integer: `

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
```
**`POST`/api/users**
----
  creates new user


*  **URL Params**

   None

* **Data Params**

```javascript
  username: [string],
  phone: [integer],
  email: [string],
  car: [string],
  description: [string],
  photo: [string],
  session: [string],
  seats: [integer]
```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/users/1",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type : "POST",
      data: JSON.stringify({
        username:"test"
        email:"test@test.com"
        phone:123456
        photo:"skjdgbsjgns"
        session:"dfjgnjflglfdg",njk
        seats:2
      })
    });
```

**`PUT`/api/users/:id**
----
  makes changes for user with correspondent id


*  **URL Params**

   None

* **Data Params**

```javascript
  username: [string],
  phone: [integer],
  email: [string],
  car: [string],
  description: [string],
  photo: [string],
  session: [string],
  seats: [integer]
 ```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/users/1",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type : "PUT",
      data: JSON.stringify({
        username:"test"
        email:"test@test.com"
        phone:123456
        photo:"skjdgbsjgns"
        session:"dfjgnjflglfdg",njk
        seats:2
      })
    });
```

**`GET`/api/rides**
----
  Returns json data about a single user.


*  **URL Params**

```javascript
            count: [boolean] // returns amount of rides, e.g., `count=true`
(required)  coordsFrom: [numeric,numeric] // returns all rides with current start point, e.g., `coordsFrom=50.197,42.1235`
(required)  coordsTo: [numeric,numeric] // returns all rides with current end point, e.g., `coordsTo=50.197,42.1235`
(required)  date: [string] // returns all rides starts from the passed date in the ISO format, e.g., `date=2017-01-19T20:08:39.690Z`
            order: [string] // returns all rides in ascending/descending order. Default value is "ASC", e.g., `order=DESC`
```

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```json
[
  {
    "rideId": 6,
    "date": "2017-01-16T19:39:41.942Z",
    "coordsFrom": {
      "type": "Point",
      "coordinates": [
        50.0922255,
        19.9899158
      ]
    },
    "coordsTo": {
      "type": "Point",
      "coordinates": [
        50.0854555,
        19.9772598
      ]
    },
    "titleFrom": "Home",
    "titleTo": "Work",
    "maxSeats": 3,
    "status": "active",
    "createdAt": "2017-01-16T19:39:41.942Z",
    "updatedAt": "2017-01-16T19:39:41.942Z",
    "UserDriverId": 1
  },
  {
    "rideId": 7,
    "date": "2017-01-16T19:39:41.942Z",
    "coordsFrom": {
      "type": "Point",
      "coordinates": [
        50.0922255,
        19.9899158
      ]
    },
    "coordsTo": {
      "type": "Point",
      "coordinates": [
        50.0854555,
        19.9772598
      ]
    },
    "titleFrom": "Home",
    "titleTo": "Work",
    "maxSeats": 3,
    "status": "active",
    "createdAt": "2017-01-16T20:07:39.690Z",
    "updatedAt": "2017-01-16T20:07:39.690Z",
    "UserDriverId": 1
  }
]
```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/rides",
      data: JSON.stringify({
        coordsFrom:"50.0922255,19.9899158"
        coordsTo:"50.0867944,19.9779223"
        count:true
      })
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
```

**`POST`/api/rides**
----
  creates new user


*  **URL Params**

   None

* **Data Params**

```javascript
  coordsFrom:[string]
  coordsTo:[string]
  titleFrom:[string]
  titleTo:[string]
  status:[string] //so far, accepts two options: "active" and "finished"
  maxSeats:[integer]
  UserDriverId:[integer]
  date:[string]
```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/rides",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type : "POST",
      data: JSON.stringify({
        coordsFrom:50.0922255,19.9899158
        coordsTo:50.0854555,19.9772598
        titleFrom:"ul.G.Bora-Komorowskiego, 27"
        titleTo:"al.Jana Pawla II, 3A"
        status:active
        maxSeats:1
        UserDriverId:1
        date:2017-01-19T20:07:39.690Z
      })
    });
```

**`PUT`/api/rides/:id**
----
  makes changes for ride with correspondent id


*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

```javascript
  coordsFrom:[string]
  coordsTo:[string]
  titleFrom:[string]
  titleTo:[string]
  status:[string] //so far, accepts two options: "active" and "finished"
  maxSeats:[integer]
  date:[string]
```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/users/1",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type : "PUT",
      data: JSON.stringify({
        titleFrom:"Krokus, ul.G.Bora-Komorowskiego, 37",
        coordsFrom: "50.235,52.4568"
      })
    });
```

**`DELETE`/api/rides/:id**
----
  removes ride with correspondent id


*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

    None

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/users/1",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type : "DELETE"
    });
```

**`GET`/api/rides/:rideId/reservations**
----
  Returns json data about all reservations for a particular ride.


*  **URL Params**

  None

* **Data Params**

  `rideId = [integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```json
[
  {
    "reservationId": 1,
    "seats": 2,
    "RideRideId": 1,
    "UserDriverId": 1,
    "createdAt": "2017-01-17T14:56:41.213Z",
    "updatedAt": "2017-01-17T14:56:41.213Z",
    "Ride": {
      "rideId": 1,
      "date": "2017-01-19T20:07:39.690Z",
      "coordsFrom": {
        "type": "Point",
        "coordinates": [
          50.0922255,
          19.9899158
        ]
      },
      "coordsTo": {
        "type": "Point",
        "coordinates": [
          50.0854555,
          19.9772598
        ]
      },
      "titleFrom": "Home",
      "titleTo": "Work",
      "maxSeats": 1,
      "status": "active",
      "createdAt": "2017-01-17T13:48:22.111Z",
      "updatedAt": "2017-01-17T13:48:22.111Z",
      "UserDriverId": 1
    },
    "User": {
      "driverId": 1,
      "username": null,
      "phone": null,
      "email": "Name_Surname@epam.com",
      "office": null,
      "car": null,
      "description": null,
      "photo": null,
      "session": "jads65378fdkjfh38",
      "seats": null,
      "createdAt": "2017-01-17T11:39:33.525Z",
      "updatedAt": "2017-01-17T11:39:33.525Z"
    }
  },
  {
  ...
  }
]
```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/rides/1/reservations",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
```

**`GET`/api/rides/:rideId/reservations/:id**
----
  Returns json data about a single reservation for particular ride.


*  **URL Params**

  None

* **Data Params**

  `rideId = [integer]`
  `id = [integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```json
  {
    "reservationId": 1,
    "seats": 2,
    "RideRideId": 1,
    "UserDriverId": 1,
    "createdAt": "2017-01-17T14:56:41.213Z",
    "updatedAt": "2017-01-17T14:56:41.213Z",
    "Ride": {
      "rideId": 1,
      "date": "2017-01-19T20:07:39.690Z",
      "coordsFrom": {
        "type": "Point",
        "coordinates": [
          50.0922255,
          19.9899158
        ]
      },
      "coordsTo": {
        "type": "Point",
        "coordinates": [
          50.0854555,
          19.9772598
        ]
      },
      "titleFrom": "Home",
      "titleTo": "Work",
      "maxSeats": 1,
      "status": "active",
      "createdAt": "2017-01-17T13:48:22.111Z",
      "updatedAt": "2017-01-17T13:48:22.111Z",
      "UserDriverId": 1
    },
    "User": {
      "driverId": 1,
      "username": null,
      "phone": null,
      "email": "Name_Surname@epam.com",
      "office": null,
      "car": null,
      "description": null,
      "photo": null,
      "session": "jads65378fdkjfh38",
      "seats": null,
      "createdAt": "2017-01-17T11:39:33.525Z",
      "updatedAt": "2017-01-17T11:39:33.525Z"
    }
  }
```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/rides/1/reservations/2",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
```

**`POST`/api/rides/:rideId/reservations**
----
  creates a new reservation for the certain ride


*  **URL Params**

   None

* **Data Params**
`rideId = [integer]`

```javascript
(required)  seats:[integer]
(required)  driverId:[integer]
```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/rides/1/reservations",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type : "POST",
      data: JSON.stringify({
        driverId:1
        seats:3
      })
    });
```

**`PUT`/api/rides/:rideId/reservations/:id**
----
  makes changes for certain reservation within particular ride 

*  **URL Params**
 
   `id = [integer]`
   `rideId = [integer]`

* **Data Params**

```javascript
  seats:[integer]
```

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/rides/1/reservations/2",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type : "PUT",
      data: JSON.stringify({
        seats: 1
      })
    });
```

**`DELETE`/api/rides/:rideId/reservations/:id**
----
  removes a reservation for certain ride


*  **URL Params**

  `rideId=[integer]`
  `id=[integer]`

* **Data Params**

    None

* **Sample Call:**
```javascript
    $.ajax({
      url: "/api/rides/1/reservations/2",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type : "DELETE"
    });
```