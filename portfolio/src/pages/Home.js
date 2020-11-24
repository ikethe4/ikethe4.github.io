import React, {useState, useEffect} from "react";


function Home(props){

    return (
        <>
      <div class="container">
        <div class="row">
            <header class="header">
                <h1>About Me</h1>
            </header>
        </div>
        <br/>
        <div class="row">
            <section class="col-md-12">
                <img src="photos/cullen-and-me.jpg" class="rounded float-left" alt="about-me"/>
                <article class="about-me-text"> My name is Isaac Arnold, and I am a photographer currently based out of Houston, TX.  When photography work slowed down due to the global pandemic, I viewed it as the perfect time to acquire a useful, new skill set.  I began my coding journey in September of 2020.  Aside from photography, I also have a passion for playing music.  I play the ukulele and the banjo.  The photo to the left is of me sharing my love of music with my nephew.</article>
            </section>
        </div>
        <br/>
        <section class="row">
            <article class="text2">My goal in learning to code is to establish a skill set that will offer me job security in an exciting and growing field.  While I am new to this field, I already find myself drawn to the puzzle solving aspect of coding.  It offers much more room for creativity than I would have originally guessed.  I have actually found many parallels between coding and photography that I would not have expected as recently as a month ago.  I look forward to continuing my journey (and the joys and frustrations that are guaranteed to come along the way).</article>
        </section>
    </div>
        </>
    )
}

export default Home