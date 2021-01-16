import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NavigationItemsService } from '@core/services/navigation-items/navigation-items.service';
import { NavItemNode } from '@core/models/nav-item-node';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss']
})
export class NavigationItemsComponent implements OnInit {
  private _transformer = (node: NavItemNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private navItemsService: NavigationItemsService) {
    this.dataSource.data = navItemsService.getNavItems();
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
