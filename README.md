# How to use the Brightcove Player Annotations

On the video, you will need to **Add Cue Point**. 

While adding the **Cue Point** you will need to add the annotation content as follow:
The **Timecode** you add for the **Cue Point** will be the moment the Annotation shows up.
The **Type** has to be `code`.
**Name** is irrelevant. Can be anything.
**Metadata** - Here is where the duration and content for the annotation is inserted. It has to follow one specific format.

`duration`; `text`; `link`(optional)

Ex: **Metadata**: 2;Annotation Content Here;http://www.google.com

With this information in the **Metadata** field, we will have a twi second annotation, with the sentence "Annotation Content Here", linking to google.com.

When publishing the video with the annotation, you should choose the **ABGlobal Annotations** player.



