# 프론트 엔드 개발

## 표기법 
- 사용자가 이름을 지정하는 경우
- 여러 단어를 사용해서 이름을 지정하는 경우

```
html-css : kebab case

html_css : snake case - Python 

htmlCss : camel case  - Javascript, JAVA, C, C++

HtmlCss : Pascal Case - Javascript, JAVA, C, C++ (Class)

Front End
- HTML( class, id ) : kebab case
- File/Folder name : snake case
- Js : camel case
- Js : Pascal Case

```

## HTML

### HTML Introduction
https://www.w3schools.com/html/html_intro.asp

> 웹페이지 구조 표시
> 
> 웹페이지 컨텐츠 표시
> - 텍스트 컨텐츠
> - 멀티미디어 컨텐츠 : 이미지, 비디오, 오디오

`(backtick)

```
<tagname>CONTENTS</tagname>

** 시작태그만 있는 Element : Empty element
```

### HTML Element
https://www.w3schools.com/html/html_elements.asp

> 포함관계
> - 기준에 따라서 조상요소(Ancsetor), 부모요소(Parent), 자식요소(Child), 자손요소(Descendant)

```
<html>
  <body>
    <h1>web page</h1>
  </body>
</html>

*html : body의 부모요소, h1의 조상요소

*body : html의 자식요소, h1의 부모요소

*h1 : html의 자손요소, body의 
```

### HTML Attributes
https://www.w3schools.com/html/html_attributes.asp


### HTML Heading
https://www.w3schools.com/html/html_headings.asp



### HTML Paragraph
https://www.w3schools.com/html/html_paragraphs.asp



### HTML Hyperlink
https://www.w3schools.com/html/html_links.asp

a : anchor(닻)
href : hypertext reference (이동할 웹페이지 참조)
target="_blank" : 새탭에서 열기



### HTML URL
https://www.w3schools.com/html/html_urlencode.asp

인터넷 주소
- IP(Internet Protocol) 주소 : 192.168.0.1
- 도메인(Domain Name) 주소 : www.naver.com
- domain -> DNS(Domain Name Server/System) -> ip

URL(Uniform Resource Locator)
- 자세한 주소
- 도메인주소 + 해당 페이지 폴더 위치/ 파일 위치
- 인터넷 주소를 표현하는 가장 큰 범위
- 프로토콜 : http, https, ftp ...


### HTML File Path
https://www.w3schools.com/html/html_filepaths.asp

절대 경로
- 출발지점에 상관없이 항상 같은 리소스를 찾을 수 있도록 표시하는 주소/경로
- 장점 : 항상 같은 자원의 위치로 찾아올 수 있음
- 단점 : 주소 표시 길이 길다
- EX) 도메인주소/파일경로 : https://www.w3schools.com/html/html_filepaths.asp

상대 경로
- 출발 지점을 기준으로 리소스 경로를 표시하는 주소/경로
- 장점 : 주소 표시 길이가 상대적으로 짧음
- 단점 : 기준에 따라서 표시 방식이 매번 달라짐
- Ex) 파일(폴더) 경로 : html/html_filepaths.asp , ../html/html_filepaths.asp
- Ex) 루트 상대 경로 : /html/html_filepaths.asp (절대경로같은 역할)


### HTML Table
https://www.w3schools.com/html/html_tables.asp

table generator
https://www.tablesgenerator.com/html_tables

### HTML List
https://www.w3schools.com/html/html_lists.asp

중첩목록(Nested List) : 여러 수준(Level)으로 구성된 목록


### HTML Image
https://www.w3schools.com/html/html_images.asp

alt : alternative (이미지가 뜨지 않을 때 대신 뜨는 글자)



### HTML Video
https://www.w3schools.com/html/html5_video.asp



### HTML Youtube
https://www.w3schools.com/html/html_youtube.asp



