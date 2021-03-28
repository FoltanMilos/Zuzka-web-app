import { Component, OnInit } from '@angular/core';
import {CdkTreeModule, FlatTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';

const TREE_DATA: ExampleFlatNode[] = [
  {
    name: 'Kategórie produktov',
    expandable: true,
    level: 0,
  }, {
    name: 'SOMI',
    expandable: false,
    level: 1,
  }, {
    name: 'Hydro active',
    expandable: false,
    level: 1,
  }, {
    name: 'Skin control',
    expandable: false,
    level: 1,
  }, {
    name: 'Dalsie triedenie',
    expandable: true,
    level: 0,
  }, {
    name: 'Na plet',
    expandable: true,
    level: 1,
  }, {
    name: 'Tvar',
    expandable: false,
    level: 2,
  }, {
    name: 'Kozku',
    expandable: false,
    level: 2,
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-eshop-tree-list',
  templateUrl: './eshop-tree-list.component.html',
  styleUrls: ['./eshop-tree-list.component.scss']
})
export class EshopTreeListComponent implements OnInit {
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getParentNode(node: ExampleFlatNode): ExampleFlatNode | null {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }
    return null;
  }
  constructor() { }

  ngOnInit(): void {
  }

  shouldRender(node: ExampleFlatNode): boolean {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }
}
