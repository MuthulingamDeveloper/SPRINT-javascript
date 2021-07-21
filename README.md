
ISSUE: Make use of 'space' key and 'arrow keys' to play this game. #8

Name: Muthulingam M

Description:
    to add this functionality I have created a event lister for keycode 32(for space) and 38 (for arrow)

    document.body.onkeyup = function(e){
    if(e.keyCode == 32|| e.keyCode ==38){
       jump()
    }
 }
  Demo video:
    https://drive.google.com/file/d/1tqXmpl9qVgbxS5ioRyHx5f7oQvaajA5_/view?usp=drivesdk

