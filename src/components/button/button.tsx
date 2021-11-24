import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'pai-core-button',
    styleUrl: 'button.css',
    shadow: true
})
export class Button {
        
    /**
     * Set up appearance true | false
     *
     * @default true
     */
    @Prop() primary: boolean = true;
    @Prop() disabled?: boolean;
    /**
     * Set the value 
     *
     * @default "Button"
     */
    @Prop() value?: string = "Button";

    render() {
        return <input type="button" value={this.value} />
    }
}