import { TemplateRef, ViewContainerRef, EventEmitter } from '@angular/core';
import { ComponentsHelper } from '../utils/components-helper.service';
export declare class TooltipDirective {
    content: string;
    htmlContent: string | TemplateRef<any>;
    placement: string;
    isOpen: boolean;
    enable: boolean;
    animation: boolean;
    appendToBody: boolean;
    popupClass: string;
    tooltipContext: any;
    tooltipStateChanged: EventEmitter<boolean>;
    viewContainerRef: ViewContainerRef;
    componentsHelper: ComponentsHelper;
    private visible;
    private tooltip;
    constructor(viewContainerRef: ViewContainerRef, componentsHelper: ComponentsHelper);
    show(): void;
    hide(): void;
    private triggerStateChanged();
}
