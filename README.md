# Main

'홈' 탭에서 랜덤으로 3개의 main id, 음악 파일의 url, 사진의 url, 음악 제목, 음악 제작자를 제공한다.

- **URL**

  /main

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200,`

  `arr: [{ main_id: 3, main_name: "Clouds", main_music: "Clouds.mp3", main_author: "Huma-Huma", main_picture: "7.jpg"},`

  `{ main_id: 6, main_name: "Go to Sleep My Little One", main_music: "Go_to_Sleep_My_Little_One.mp3", main_author: "Doug Maxwell/Media Right Productions", main_picture: "11.jpg"},`

  `{ main_id: 11, main_name: "Pachabelly", main_music: "Pachabelly.mp3", main_author: "Aakash Gandhi", main_picture: "16.jpg" }] }`

  `main_music`이  음악 URL, `main_picture`이 사진 URL이다.

  실제 URL 주소는

  - 음악 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-main/(main_music_값)>
- 사진 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-main/(main_picture_값)>

---



# Sleep

'수면' 탭에서 asmr 파일의 id, url, asmr 제목과 사진을 제공한다.

- **URL**

  /sleep

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status : 200,`

  `arr : [{ sleep_id : 1, sleep_music : "fall1.mp3", sleep_name : "새와 밤벌레 울음소리 1", sleep_picture : "33.jpg" },`

  `{ sleep_id : 2, sleep_music : "fall2.mp3", sleep_name : "새와 밤벌레 울음소리 2", sleep_picture : "28.jgp" }] }` 

  * ASMR URL: sleep_music

    실제 주소: <https://s3.ap-northeast-2.amazonaws.com/shim-sleep/(sleep_music_값)>

  * Picture URL: sleep_picture
  
    실제 주소: <https://s3.ap-northeast-2.amazonaws.com/shim-sleep/(sleep_picture_값)> 
  
  ​	EX. <https://s3.ap-northeast-2.amazonaws.com/shim-sleep/fall1.mp3>







# Video

'영상' 탭에서 영상 id, 영상 url, 영상 제목, 영상 제작자 정보를 제공한다.

- **URL**

  /video/:category

  - category에는 all / baby / animal이 있다.

    ​	( EX. /video/all )

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `/video/baby`에 대한 결과 :

  `{ status : 200,`

  `arr : [{ video_id : 2, video_url : "w-N8FWyNZzk", video_title : "[60초 에디터Pick] 댕댕이보다 더 댕댕이 같은 건후ㅋㅋㅋㅋ", video_creator : "KBS 한국방송 (MyloveKBS)" },`

  `{ video_id : 4, video_url : "VDc3kb14YsU", video_title : "[HIT] 설특집 슈퍼맨이 돌아왔다 - 다시보는 '성균관 삼둥이' 귀여움 폭발 2. 20150219", video_creator : "KBSEntertain" }] }`

  video_url이 유튜브 링크이며, 실제 주소는 https://youtu.be/(video_url_값) 형식이다.

  EX. https://youtu.be/w-N8FWyNZzk

---




# Music

'음악' 탭에서 음악 id, 음악 파일의 url, 사진의 url, 음악 제작자와 음악 제목을 제공한다.

- **URL**

  /music/:category

  * category에는 all / sleep / instrument / nature이 있다.

    ​	( EX. /music/all )

- **Method**

  `GET`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  None

- **Success Response**

  **Code**: 200

  **Content**:

  `/music/instrument`에 대한 결과 :

  `{ status: 200, `

  `arr: [{ music_id: 1, music_name: "Minyo San Kyoku", music_music: "Minyo_San_Kyoku.mp3", music_author: "Doug Maxwell/ Zac Zinger", music_picture: "3.jpg"},`

  `{ music_id: 9, music_name: "Holiday Brass Ensemble", music_music: "Holiday_Brass_Ensemble.mp3", music_author: "Doug Maxwell/Media Right Productions", music_picture: "14.jpg" }] }`

  `music_music`이  음악 URL, `music_picture`이 사진 URL이다.

  실제 URL 주소는

  * 음악 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-music/(music_music_값)>
* 사진 URL: <https://s3.ap-northeast-2.amazonaws.com/shim-music/(music_picture_값)>

---



# log/frag

사용자가 fragment를 바꿀 때마다 log값을 저장한다.

- **URL**

  /log/frag

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

   `f_enter_log_user_id` : VARCHAR
    `f_enter_log_type` : VARCHAR (main/sleep/music/video 중 하나)

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, msg: "ok" }`

---



# log/main

사용자가 main 화면을 바꿀 때마다, 음악을 재생하거나 정지할 때마다 log 값을 저장한다.

- **URL**

  /log/main

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  `main_log_user_id` : VARCHAR

  `main_log_pic_id` : INT

  `main_log_action` : SMALLINT (1: 재생, 0: 정지)

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, msg: "ok" }`

---



# log/sleep

사용자가 sleep에서 음악을 재생하거나 정지할 때마다 log 값을 저장한다.

- **URL**

  /log/sleep

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  `sleep_log_user_id` : VARCHAR

  `sleep_log_sleep_id` : INT

  `sleep_log_action` : SMALLINT (1: 재생, 0: 정지)

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, msg: "ok" }`







# log/video

사용자가 video에서 영상을 재생하거나 정지할 때마다 log 값을 저장한다.

- **URL**

  /log/video

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  `video_log_user_id` : VARCHAR

  `video_log_video_id` : INT

  `video_log_action` : SMALLINT (1: 재생, 0: 정지)

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, msg: "ok" }`

---



# log/music

사용자가 music에서 음악을 재생하거나 정지할 때마다 log 값을 저장한다.

- **URL**

  /log/music

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  `music_log_user_id` : VARCHAR

  `music_log_music_id` : INT

  `music_log_action` : SMALLINT (1: 재생, 0: 정지)

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, msg: "ok" }`

---





# etc/feedback

사용자로부터 feedback을 받는다.

- **URL**

  /etc/feedback

- **Method**

  `POST`

- **Header Params**

  None

- **URL Params**

  None

- **Data Params**

  `feedback_userid` : VARCHAR

  `feedback_contact` : VARCHAR

  `feedback_title` : VARCHAR

  `feedback_contents` : TEXT

- **Success Response**

  **Code**: 200

  **Content**:

  `{ status: 200, msg: "ok" }`

---



# 참고

IP주소: 52.78.106.14

​	EX. 52.78.106.14/music/instrument
