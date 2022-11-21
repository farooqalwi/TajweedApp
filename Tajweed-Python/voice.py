from gtts import gTTS
from playsound import playsound
import  speech_recognition as sr
r=sr.Recognizer()
with sr.Microphone() as src:
    r.adjust_for_ambient_noise(src,duration=1)
    print('Say something....')
    audio=r.listen(src,timeout=3)
    try:
        t=r.recognize_google(audio,language='ar-AR')
        print(t)
        f=open('text.txt','a',encoding='utf-8')
        f.writelines(t+'\n')
        f.close()
        obj=gTTS(text=t,lang='ar',slow=False)
        obj.save('text.mp3')
        playsound('text.mp3')
    except sr.UnknownValueError as U:
        print(U)
    except sr.RequestError as R:
        print(R)

