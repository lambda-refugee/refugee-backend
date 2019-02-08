# Refugee-Backend

This is the Back-end portion for the Refugee Project Group 

---

## Getting Started

The users API can be found at the following URL:

https://ancient-ocean-58774.herokuapp.com/users

The Stories API can be found at the following URL:

https://ancient-ocean-58774.herokuapp.com/stories


### Prerequisites

*Run `yarn` to install dependencies
*Run `yarn start` to run the port(4000 or 5000) on the localhost
*Run `yarn server` to enable the console on the terminal

---

## Endpoints

### Users API 

|Method   |Endpoint       |Requires                |Description                                      |
| :------ | :-----------: | :--------------------: | :---------------------------------------------: |
| GET     | `/`           | `api running`          | text to show port and endpoint are up           |  
| POST    | `/register`   | `username`, `password` | allows user to register a username and password |
| POST    | `/login`      | `username`, `password` | allows users to log in                          |
| GET     | `/users`      | user must be logged in | logged in user can see all users                |

---

### User Registration

Method: **[Post]** `/register`

On Success: Returns the ID of the new user

Parameters:

|Name      |Type           |Required                |Notes                                            |
| :------- | :-----------: | :--------------------: | :---------------------------------------------: |
| username | string        | yes, unique            | username used to log in, no 2 of the same       |  
| password | string        | yes                    | credentials to log in, in combo with username   |
| role     | string        | no                     | gives access to pages not given to other users  |

Example: 

```
{
  "username": "dummy",
  "password": "dummy",
  "role": "admin"
}
```
---

### User Login

Method: **[Post]** `/login`

On Success: Returns a message "welcome" and token 


  Testing Credentials on POSTMAN: 
    1. Copy the token
    2. Go to endpoint requiring authentication
    3. In the Headers section
    4. Type Authorization in Key column
    5. Paste token into the Value column

Parameters:


|Name      |Type           |Required                |
| :------- | :-----------: | :--------------------: |
| username | string        | yes, unique            |
| password | string        | yes                    |

Example: 

```
{
  "username": "dummy",
  "password": "dummy"
}
```

---

### Stories API

|Method   |Endpoint        |Requires                    |Description                                      |
| :------ | :------------: | :------------------------: | :---------------------------------------------: |
| POST    | `/stories `    | `title`, `text`, `country` | Used to post story in que for approval          |
| GET     | `/stories`     |                            | Used to show all stories on the api             |  
| PUT     | `/stories/:id` | `id`, User must log in     | Used to update/edit stories chosen by id        |
| DELETE  | `/stoires/:id` | `id`, User must log in     | Used to delete stories chosen by id             |

---

### POST Stories

Method: **[POST]** `/stories`

On Success: Returns the ID of the new story

Parameters:


|Name      |Type           |Required   |Notes                                                             |
| :------- | :-----------: | :-------: | :--------------------------------------------------------------: |
| title    | string        | no        | used to choose a name/ no name for story post                    |  
| text     | text          | yes       | story input                                                      |
| country  | string        | no        |                                                                  |
| approved | boolean       | 0, 1      | false approval places story in que, true shows in story section  |

Example: 

```
{
  "title": "dummy",
  "text": "dummy",
  "country": "United States",
  "approved": 1
}
```

---

### GET Stories

Method: **[GET]** `/stories`


Parameters:


|Name      |Type           |Required   |
| :------- | :-----------: | :-------: |
| title    | string        | no        |
| text     | text          | yes       |
| country  | string        | no        |
| approved | boolean       | 0, 1      | 

---

### Put/Update Stories
 
Method: **[PUT]**  `/stories/:id

Requires Login

On Success: Message: "your story has been updated"

|Name           |Type           |Required   |
| :------------ | :-----------: | :-------: |
| /stories/:id  | endpoint      | yes       |
| Authorization | Header        | yes       |


Parameters: 

---

### Delete Stories

Method: **[Delete]**  `/stories/:id

Requires Login

On Success: Message: "your story has successfully been deleted"

|Name           |Type           |Required   |
| :------------ | :-----------: | :-------: |
| /stories/:id  | endpoint      | yes       |
| Authorization | Header        | yes       |
