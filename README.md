# 원티드 프리온보딩 코스

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app) 로 만들었습니다.

## 원티드 프리온 보딩 코스  프론트엔드 선발 과제 

toggle, tab, input, dropdown의 기능을 구현하였습니다.
![image](https://user-images.githubusercontent.com/63532503/165038448-1fc2499c-b17c-4170-b016-ad59c2e7cc61.png)
----
### Toggle
클릭하면  useState에 true, false가 바뀌게 하였습니다. true 와 false 에 따라 classname에 clicked라는 css 스타일이 들어갈 수 있도록 조건부 연산자를 이용하였습니다.

### Tab

클릭하면 useState에 버튼의 id를 받아와 탭의 위치가 바뀌게 하였습니다. id에 따라 css 스타일이 들어갈 수 있도록 조건부 연산자를 이용하였습니다.

### Input

입력받는 변화는 useState를 이용하였습니다.

`const EMAIL_RE = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, "i");`을 이용하여 이메일 주소의 형식을 확인하였습니다.

input 안에 아이콘을 사용하기 위해 두 가지를 설치하였습니다.

`npm install @fortawesome/free-regular-svg-icons`

`npm install @fortawesome/react-fontawesome`

### Dropdown
Dropdown에서 <select>와 <option>을 사용하면 박스가 위로 올라가는 현상이 있어 Dropdown 박스를 리스트를 이용하여 만들어 주었습니다. 비트코인의 양이 많아서 css의 scroll을 이용하였습니다.
  
  
async await와 fetch를 이용하여 코인의 정보를 받아왔습니다.
  
  
받아온 코인들을 map을 이용하여 리스트로 만들어주었습니다.
  
리스트를 클릭하면 클릭한 리스트의 text를 버튼으로 받아갈 수 있도록 하였습니다.
