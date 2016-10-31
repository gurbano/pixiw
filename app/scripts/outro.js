document.addEventListener('DOMContentLoaded', function() {

    //
    PixiGame.renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    PixiGame.renderer.view.setAttribute('class', 'renderer');
    document.body.appendChild(PixiGame.renderer.view);

    //
    PixiGame.stage = new PIXI.Container();

    // 
    PixiGame.sceneController = new PixiGame.SceneController(PixiGame.MainMenuScene);
    //PixiGame.sceneController = new PixiGame.SceneController(PixiGame.GameScene);

    //
    PixiGame.gameLoopController = new PixiGame.GameLoopController();
    PixiGame.gameLoopController.start();
});
