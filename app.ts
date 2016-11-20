import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    template: `
    <div class="four wide column center alligned votes">
        <div class="ui statistic">
            <div class="value">
                {{ votes }}
            </div>
            <div class="label">
                Points
            </div>
        </div>
    </div>
    <div class="twelve wide column">
        <a class="ui large header" href="{{ link }}">
            {{ title }}
        </a>
        <ul class="ui big horizontal list voters">
            <li class="item">
                <a href (click)="voteUp()">
                    <i class="arrow up icon"></i>
                        upvote
                </a>
            </li>
            <li class="item">
                <a href (click)="voteDown()">
                    <i class="arrow up icon"></i>
                        downvote
                </a>
            </li>
        </ul>
    </div>
    `
})
class ArticleComponent {
    votes: number;
    title: string;
    link: string;

    constructor() {
        this.title = 'Angular 2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

}

@Component({
    selector: 'reddit',
    template: `
    <div>
    <form class="ui large form segment">
        <h3 class="ui header">Add a link</h3>
        <div class="field">
            <label for="title">Title:</label>
            <input name="title" #newtitle>
        </div>
        <div class="field">
            <label for="link">Link:</label>
            <input name="link" #newlink>
        </div>
        <button (click)="addArticle(newtitle, newlink)"
                class="ui positive right floated button">
            Submit link
        </button>
    </form>
    <div class="ui grid posts">
        <reddit-article></reddit-article>
    </div>
    </div>
    `
})
class RedditApp {
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        return false;
    }
}

@NgModule({
    declarations: [
        RedditApp,
        ArticleComponent
    ],
    imports: [BrowserModule],
    bootstrap: [RedditApp]
})

class RedditAppModule {

}
platformBrowserDynamic().bootstrapModule(RedditAppModule);
