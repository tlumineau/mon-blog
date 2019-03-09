import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  // ajouter un LoveIt
  onLoveIt() {
    this.postLoveIts++;
  }

  // Retirer un LoveIt
  onDontLoveIt() {
    this.postLoveIts--;
  }

}
