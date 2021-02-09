<!--
! PENDING COMPLETION
! more usage, testing required
 -->

# Create a GIF with GIMP / OBS / Shotcut

Created: 2021/02/09 14:43:12  
Last modified: 2021/02/09 16:32:06

***\#GIMP \#images \#animation***

Most photo editing software can output .gifs by treating each **layer** of the image as a frame of the animation, and automatically loop through the frames.

The playback speed (framerate) can be controlled by changing the duration of each frame.


Blank or transparent layers can be added manually and edited in GIMP or external images imported as layers. This method is good for simple GIFs or low frame-rates but, can be difficult to manage the timing of object movement during playback due to constant duration between frames. A reliable way to recreate the realistic timing and movement in a GIF is to capture the content with screen capture software as a video. Using the frames of this video will preserve the movement and timing.

---
## METHOD 1: Add layers manually

![GIMP GIF](../media/GIMPgifTitle.gif)

This method requires that we manually add each frame of the animation as a layer in GIMP.

![GIMP layer panel](../media/layer-panel-screenshot.gif)


Or we can use other source images by importing each image as a layer in the appropriate order.

![GIMP import as layer](../media/import-as-layer-screenshot.gif)
## METHOD 2: Convert video to GIF directly

![GIF output from shotcut](../media/shotcutGIMPgif.gif)<!--! make smaller : 1000x200-->




<!-- ## Capture the content as a video

> A source video or video capture software is required for this step.  
> For this article I will be using this [video] at 1280 x 720.  
> Other free videos are available for download at [pixabay].  
> I would recommend [OBS-Studio] to record or stream your PC monitor - free and open source -->

---

## Related Articles

[bootstrap.com/what-the-fuck-is](http://getbootstrap.com) - Some awesome stuff here  
[medium.com/persons](http://medium.com/persons) - A great article about the uses of this thing, and more!  
[github.com/how-to-do-thing](http://github.com/how-to-do-thing) - Check out GitHub my dude!  

---

## Sources / Bibliography

Source | Description | Usage
-|-|-
| [MDN](http://github.com) | Official documentation | array methods, math operators
| [BootStrap](http://getbootstrap.com) | Some awesome stuff here | will this work?
| [Google](http://google.com) | Find more answers here | better check showdown!

<!-- Links used in this article ------------------------------->
[OBS-Studio]: https://obsproject.com/ "Open Broadcast Software Studio"
[video]: https://pixabay.com/videos/ocean-sunset-sea-beach-coast-62249/
[pixabay]: https://pixabay.com/
