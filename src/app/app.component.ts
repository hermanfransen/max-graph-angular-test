import { Component } from '@angular/core';
import {type CellStyle, Graph, InternalEvent} from '@maxgraph/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {}

  ngAfterViewInit() {
    const container = <HTMLElement>document.getElementById('graph-container');
    // Disables the built-in context menu
    InternalEvent.disableContextMenu(container);
    
    const graph = new Graph(container);
    graph.setPanning(true); // Use mouse right button for panning
    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    const parent = graph.getDefaultParent();
    
    // Adds cells to the model in a single step
    graph.batchUpdate(() => {
      const vertex01 = graph.insertVertex({
        parent,
        position: [10, 10],
        size: [100, 100],
        value: 'rectangle',
      });
      const vertex02 = graph.insertVertex({
        parent,
        position: [350, 90],
        size: [50, 50],
        style: {
          fillColor: 'orange',
          shape: 'ellipse',
          verticalAlign: 'top',
          verticalLabelPosition: 'bottom',
        },
        value: 'ellipse',
      });
      graph.insertEdge({
        parent,
        source: vertex01,
        target: vertex02,
        value: 'edge',
        style: {
          edgeStyle: 'orthogonalEdgeStyle',
          rounded: true,
        },
      });
    });
  }

}
