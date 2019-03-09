import { Component, Input } from '@angular/core';
import { Post } from '../../src/model/Post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public postsList: Array<Post>;
  public post1: Post;
  public post2: Post;
  public post3: Post;

  constructor() {
    // Création d'une liste de Post
    this.postsList = new Array<Post>();
    // Création du Post 1
    this.post1 = new Post();
    this.post1.title = 'Mon premier post';
    this.post1.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
    this.post1.loveIts = 1;
    this.post1.created_at = new Date('2019-03-01');
    // Création du Post 2
    this.post2 = new Post();
    this.post2.title = 'Mon deuxième post';
    this.post2.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
    this.post2.loveIts = -1;
    this.post2.created_at = new Date('2019-03-04');
    // Création du Post 3
    this.post3 = new Post();
    this.post3.title = 'Encore un post';
    this.post3.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
    this.post3.loveIts = 0;
    this.post3.created_at = new Date();
    // Ajout des 3 Post dans postsList
    this.postsList.push(this.post1);
    this.postsList.push(this.post2);
    this.postsList.push(this.post3);
  }

}


