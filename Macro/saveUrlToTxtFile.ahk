; Takes the current URL, appends it to a txt file with notepad.exe
Send ^l ; Focus and select the URL
Send ^c ; Copy selected text
Run "C:\Windows\system32\notepad.exe" "path_to_file_to_edit" ; Run the file you want to edit
  
sleep, 200 ; Waits 0.2 seconds for the notepad to launch
SendInput ^{End} ; Go to the end of the file
Send ^v ; Paste the URL in the clipboard
SendInput {enter} ; Line break

Send ^s ; Save the file
Send ^w ; Close the file
 
Return ; Close the script