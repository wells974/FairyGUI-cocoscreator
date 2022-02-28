import { Event as FUIEvent } from "./event/Event";
import { GComponent } from "./GComponent";
import { GList } from "./GList";
import { GObject } from "./GObject";
import { GTreeNode } from "./GTreeNode";
import { ByteBuffer } from "./utils/ByteBuffer";
export declare class GTree extends GList {
    treeNodeRender: (node: GTreeNode, obj: GComponent) => void;
    treeNodeWillExpand: (node: GTreeNode, expanded: boolean) => void;
    private _indent;
    private _clickToExpand;
    private _rootNode;
    private _expandedStatusInEvt;
    constructor();
    get rootNode(): GTreeNode;
    get indent(): number;
    set indent(value: number);
    get clickToExpand(): number;
    set clickToExpand(value: number);
    getSelectedNode(): GTreeNode;
    getSelectedNodes(result?: Array<GTreeNode>): Array<GTreeNode>;
    selectNode(node: GTreeNode, scrollItToView?: boolean): void;
    unselectNode(node: GTreeNode): void;
    expandAll(folderNode?: GTreeNode): void;
    collapseAll(folderNode?: GTreeNode): void;
    private createCell;
    _afterInserted(node: GTreeNode): void;
    private getInsertIndexForNode;
    _afterRemoved(node: GTreeNode): void;
    _afterExpanded(node: GTreeNode): void;
    _afterCollapsed(node: GTreeNode): void;
    _afterMoved(node: GTreeNode): void;
    private getFolderEndIndex;
    private checkChildren;
    private hideFolderNode;
    private removeNode;
    private __cellMouseDown;
    private __expandedStateChanged;
    protected dispatchItemEvent(item: GObject, evt: FUIEvent): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    protected readItems(buffer: ByteBuffer): void;
}