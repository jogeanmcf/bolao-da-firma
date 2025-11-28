import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    private username: string = '';
    private gameChoices: any = {};

    setUsername(name: string) {
        this.username = name;
    }

    getUsername(): string {
        return this.username;
    }

    setGameChoices(choices: any) {
        this.gameChoices = choices;
    }

    getGameChoices(): any {
        return this.gameChoices;
    }

    getAllData() {
        return {
            username: this.username,
            ...this.gameChoices
        };
    }
}
