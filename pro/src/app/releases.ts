export class Releases{
    version: string;
    theme: string;
    components: string;
    performance: string;
  id: any;

    constructor(version: string, theme: string, components: string, performance: string){
        this.version=version;
        this.theme=theme;
        this.components=components;
        this.performance=performance;
    }
}