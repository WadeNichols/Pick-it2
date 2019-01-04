import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

export default function HowTo() {
  return (
    <div>
      <Header />
      <Navbar />
      <body className="howTo-wrapper">
        <h1>How To Read Tabs</h1>
        <h3>Understanding Tablature</h3>
        <p>
          Tab (or tablature) is a method of writing down music played on guitar,
          bass, drums etc. Instead of using symbols like in standard musical
          notation, it uses ordinary characters and numbers. Tablature is
          possibly the best way to learn music for those who don't know special
          music notation. Reading tabs is easy, you won't have to go through
          this lesson twice.
        </p>
        <p>
          Guitars usually have 6 strings (there are 7-string and 12-string
          guitars also, but we'll ignore them now). The first thing you have to
          know is the names of all the 6 strings. The top string is the thickest
          string, and it is called the 6th string or E-string because it plays E
          note at open fret (when you don't hold down any frets and just pick
          the string), assuming standard tuning. The next string is called 5th
          string or A string for similar reasons. The other string in order are
          4th or D string, 3rd or G string, 2nd or B string and 1st or e-string
          (thinnest string). As the 1st and 6th string are both E notes, we
          distinguish the 1st string by writing it in a smaller case "e".
        </p>
        <p>Now we are ready to move to tabs.</p>
        <h3>How To Read Tabs</h3>
        <p>
          The first thing you will notice about tabs is that there are six
          lines. They represent the six strings of the guitar and typically look
          like this:
        </p>
        <code className="list-container">
          <p className="code">
            <span>e</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>B</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>G</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>D</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>A</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>E</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
        </code>
        <p>
          We have written the string names (the note each string plays when you
          don't hold down any frets) on the left, this may not be given in all
          tabs. If it is not given, you'll have to assume that it is the same as
          we've written here.
        </p>
        <p>
          Note that the top string of your guitar (the 6th or E string) is
          written at the bottom of the tab, and the bottom string (1st of e
          string) is written at the top. Many beginners get confused at this,
          but this is the standard way to write tabs.
        </p>
        <p>
          Also note that in some cases the string names may be written
          differently. These are the cases when the song is not played with
          standard tuning. That means the open strings don't play the notes E,
          A, D, G, B, e but some other notes. As this lesson is for beginners,
          we will stick to standard tuning guitar tabs.
        </p>
        <p>
          The next thing you notice on a tab is the numbers. The numbers
          represent frets. 1 means 1st fret, 2 means second fret and so on. A 0
          (zero) means open string. For example:
        </p>
        <code className="list-container">
          <p className="code">
            <span>e</span>
            <span>|</span>
            <span>---------2----------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>B</span>
            <span>|</span>
            <span>-------3---3--------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>G</span>
            <span>|</span>
            <span>-----2-------2------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>D</span>
            <span>|</span>
            <span>---0----------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>A</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>E</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
        </code>
        <p>
          Tabs are meant to be read from left to right. Here in this tab, first
          you play D string at open fret, then G string at 2nd Fret, then B
          string and 3rd fret and so on. If you know your chords, then you would
          notice that this tab plays the notes of a D major chord.
        </p>
        <p>Another example:</p>
        <code className="list-container">
          <p className="code">
            <span>e</span>
            <span>|</span>
            <span>--0--0--0--2--2-----------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>B</span>
            <span>|</span>
            <span>--0--0--2--3--3-----------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>G</span>
            <span>|</span>
            <span>--1--1--2--2--2-----------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>D</span>
            <span>|</span>
            <span>--2--2--2--0--0-----------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>A</span>
            <span>|</span>
            <span>--2--2--0--x--x-----------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>E</span>
            <span>|</span>
            <span>--0--0--x--x--x-----------------------</span>
            <span>|</span>
          </p>
        </code>
        <p>
          The difference between this tab and the first tab is that here
          multiple strings are hit at the same time, so this indicates
          strumming. At first you hold down and A and D string and 2nd fret and
          G string at 1st fret and play all 6 strings. If you're familiar with
          basic guitar chords, then you will notice that this is E major chord.
          According to the tab, E major chord is strummed twice. The next chord
          is A major which is strummed once and then D major is strummed twice.
        </p>
        <p>
          The x indicates that that string is not played. Meaning you don't hit
          that string with your strumming hand. It could also indicate a dead
          note. This means that you play that string with your strumming hand
          but it doesn't make a sound because you muted that string with your
          other hand. Holding a string lightly (rather than pressing it firmly
          down at the fretboard) and hitting it creates a dead note. Whether or
          not a string is not played or it's a dead note can be confusing as
          they are both represented by x. Listening to the song will often give
          you a clue. For a beginner, assume that the x indicates that the
          string is not played.
        </p>
        <h3>Basic tablature symbols</h3>
        <p>Now for the special symbols used in tabs:</p>
        <code className="list-container">
          <p>
            <span className="code">/</span>
            <span>=</span>
            <span>slide up</span>
          </p>
          <p>
            <span className="code">\</span>
            <span>=</span>
            <span>slide down</span>
          </p>
          <p>
            <span className="code">h</span>
            <span>=</span>
            <span>hammer-on</span>
          </p>
          <p>
            <span className="code">p</span>
            <span>=</span>
            <span>pull-off</span>
          </p>
          <p>
            <span className="code">~</span>
            <span>=</span>
            <span>vibrato</span>
          </p>
          <p>
            <span className="code">+</span>
            <span>=</span>
            <span>harmonic</span>
          </p>
          <p>
            <span className="code">x</span>
            <span>=</span>
            <span>dead note</span>
          </p>
          <p>
            <span className="code">b</span>
            <span>=</span>
            <span>bend</span>
          </p>
          <p>
            <span className="code">pb</span>
            <span>=</span>
            <span>pre-bend</span>
          </p>
          <p>
            <span className="code">br</span>
            <span>=</span>
            <span>bend release</span>
          </p>
          <p>
            <span className="code">pbr</span>
            <span>=</span>
            <span>pre-bend release</span>
          </p>
          <p>
            <span className="code">brb</span>
            <span>=</span>
            <span>bend release bend</span>
          </p>
        </code>
        <p>Let's explain some of the most commonly used symbols with a tab:</p>
        <code className="list-container">
          <p className="code">
            <span>e</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>B</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>G</span>
            <span>|</span>
            <span>-----------------------9-11-11h12-12--</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>D</span>
            <span>|</span>
            <span>-9-9h11--11p9--9-11/12----------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>A</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
          <p className="code">
            <span>E</span>
            <span>|</span>
            <span>--------------------------------------</span>
            <span>|</span>
          </p>
        </code>
        <p>
          First, D string at 9th fret is played. Then we notice 9h11. This means
          you put your finger at 9th fret, pick the string than hammer the 11th
          fret. Hammering means you pick a string with your finger at one fret,
          then without picking that string again you use your fretting hand to
          hit another fret (in this case 11th fret) hard enough to create sound.
          Remember, you pick once but get 2 notes when hammering.
        </p>
        <p>
          Next we see 11p9. This means pick the string at 11th fret then
          "pull-off" that finger while another finger is already placed at 9th
          fret. It's like pinching the string at 11th fret with the fretting
          hand while you have a finger placed at 9th fret. The effect is like
          reverse hammering. 2 notes are played with one picking of the
          strumming hand. Hammering and pull-offs are often done in a row like
          9h11p9. It's playing the 9th fret, then hammering the 11th fret and
          then pulling-off to 9th fret again. All with just one pick of the
          strumming hand. Sound difficult? You will learn it if you practice.
          It's not that hard.
        </p>
        <p>
          As we move along the tab, we notice 11/12. This means you hold down
          11th fret and pick the string, then without releasing the pressure,
          you "slide" the finger to 12th fret. Again, you pick once but get two
          notes when sliding.
        </p>
        <p>
          \ is just sliding in the other direction. So 5\3 means slide from 5th
          fret to 3rd fret, picking only once (at 5th fret).
        </p>
        <p>
          ~ means just vibrating the finger when you hold down a string at a
          fret. It gives a nice effect.
        </p>
        <p>
          b means bending the string at a fret to give the sound of another
          fret. For a beginner, we would suggest avoid string bending for now,
          and don't try to play the tabs that have a lot of strßing bending.
        </p>
        <p>
          My final advice for the beginner who is now ready to read his first
          tab: start with a simple tab like "Come As You Are" - Nirvana or "All
          The Small Things" - blink-182.
        </p>
        <p>I hope this was helpful</p>
        <p>
          Don't give up on tabs, be patient, keep trying and you'll eventually
          succeed in playing your favorite songs on guitar!
        </p>
        <div>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/By93_ByoefE"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </body>
    </div>
  );
}
