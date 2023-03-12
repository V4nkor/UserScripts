; Copies the current URL and sends it to firefox (or other browser of your choice)
Send ^l ; Focus and select the URL
Send ^c ; Copy selected text

SetTitleMatchMode, 2
; If the window has Mozilla Firefox in it, focus the window
if WinExist("Mozilla Firefox")
	WinActivate ; 
; Else launch Firefox
else
	WinActivate, Mozilla Firefox
	;Run "C:\Program Files\Mozilla Firefox\firefox.exe" ;
	
sleep, 200 ; Wait for 0.2 seconds
Send ^l ; Focus and select the URL
Send ^v ; Copies from the clipboard
sleep, 200 ; Wait for 0.2 seconds
SendInput {enter} ; Enters the URL
Send ^t ; ; Create a new tab
Send !{tab} ; Switch to previous window
Send ^w ; Close the tab you sent to firefox
Return ; End the script