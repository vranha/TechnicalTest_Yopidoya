import { GithubService } from "./../../services/github.service";
import { Component, OnInit } from "@angular/core";
import { Contributor } from "./interfaces/contributors.interface";

@Component({
    selector: "app-exercice",
    templateUrl: "./exercice.component.html",
    styleUrls: ["./exercice.component.scss"],
})
export class ExerciceComponent implements OnInit {
    contributors!: Contributor[];
    isData:boolean = true;
    repo!:string;

    constructor(private githubSvc: GithubService) {}

    ngOnInit(): void {}

    getContributors(owner: string, repo: string) {
      this.contributors = [];
        this.githubSvc.getData(owner, repo).subscribe((data) => {
            this.contributors = data;
            this.isData = true
            this.repo = repo;
            setTimeout(() => {
              document.getElementById('contr')?.scrollIntoView({block: "end", behavior: "smooth"})

            }, 0);
        },
        err => this.isData = false);

    }

}
