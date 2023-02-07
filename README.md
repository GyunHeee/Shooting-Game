# Shooting-Game
## 목적 
당근을 조준하여 클릭하는 게임입니다. javascript의 DOM요소를 이해하고 관련한 실습활동을 위한 프로젝트입니다. 
## 주요 기능
당근을 클릭하면 당근이 사라지며 점수가 증가합니다. 게임을 다시 시작하면 당근이 다시 랜덤으로 새롭게 배치됩니다. 
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/92011224/217183116-3bc66677-fabe-422d-b6e3-60a7e208a0de.gif)
![image](https://user-images.githubusercontent.com/92011224/217183168-c12d2089-623d-4f79-9a7e-d574fba93af4.png)
## 배운점
* javascript의 DOM요소를 동적으로 받아오는 과정
* getBoundingClientRect()
* 이벤트 위임 (일일이 eventlistener를 자식 노드에 추가하지 않고 부모 노드에 등록)
* operation에서 layout 변경은 최대한 없도록 하는 것의 중요성 (top, left -> transform: translate())
* element.matches()
## 어려운점
* random number를 받아오는 과정
* 이벤트 위임할 때 자식 노드를 식별하는 과정 -> matches로 해결
## Deploy
https://gyunheee.github.io/Shooting-Game/
