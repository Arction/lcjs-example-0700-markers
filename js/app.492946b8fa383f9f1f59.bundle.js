(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,s)=>{const i=s(377),r=s(613),{lightningChart:o,AutoCursorModes:a,UIVisibilityModes:n,MarkerBuilders:d,UIBackgrounds:g,UIDirections:l,UIOrigins:h,UIElementBuilders:u,UIDraggingModes:c,Themes:k}=i,{createProgressiveTraceGenerator:b}=r,m="Markers",M=o({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:k[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle(m).setCursorMode(void 0).setPadding({right:50}),w=M.addLineSeries();b().setNumberOfPoints(100).generate().toPromise().then((e=>{const t=(e[0].y+e[e.length-1].y)/2;w.add(e),M.addChartMarkerXY().setPosition({x:60,y:t}).setResultTableVisibility(n.always).setResultTable((e=>e.setContent([["ChartMarker"]]))).setGridStrokeXVisibility(n.whenDragged).setGridStrokeYVisibility(n.whenDragged).setTickMarkerXVisibility(n.whenDragged).setTickMarkerYVisibility(n.whenDragged)}));const y=d.SeriesMarkerXY.setResultTableBackground(g.Pointer).addStyler((e=>e.setResultTable((e=>e.setOrigin(h.CenterBottom).setMargin({bottom:0}).setBackground((e=>e.setDirection(l.Down).setPointerAngle(80).setPointerLength(20))))).setGridStrokeXCut(!0).setAutoFitStrategy(void 0)));w.addMarker(y).setPosition({x:50,y:0}),M.addUIElement(u.ButtonBox).setPosition({x:99,y:99}).setOrigin(h.RightTop).setText("Download PNG Image").setPadding({top:5,right:20,bottom:5,left:20}).setButtonSize(0).setDraggingMode(c.notDraggable).onMouseClick((e=>{M.saveToFile(m+" - Screenshot")}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);