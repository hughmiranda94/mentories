import { AlbumService } from "../public/src/album-service";
import { AlbumView } from "../public/src/album-view";

const delayFn = (callback, interval = 1000) => {
    let fn = function () {
        callback();
        clearTimeout(ticker);
    };
    let ticker = setTimeout(fn, interval);
}

describe('Albums Service', () => {
    let albumService = new AlbumService();
    it('Should have an empty album', () => {
        expect(albumService.picturesList.length).toBe(0);
    });

    it('Should populate album', () => {
        albumService.importAlbum().then(() => {
            expect(albumService.picturesList.length).toBeGreaterThan(0);
        })
    });

});

describe('Album view', () => {

    it('Should imports an album', () => {
        spyOn(AlbumView.prototype, 'importAlbum');
        let albumView = new AlbumView();
        expect(AlbumView.prototype.importAlbum).toHaveBeenCalled();
    });

    it('Should draws an album', () => {

        let el = document.createElement('main');
        let albumView = new AlbumView(el);
        spyOn(albumView, 'render');
        spyOn(albumView, 'draw');
        spyOn(albumView, 'getAlbumTemplate');
        spyOn(albumView, 'drawPictures');
        spyOn(albumView, 'getPictureTemplate');

        delayFn(() => {
            expect(albumView.getElement().innerHTML !== '').toBe(true);

            expect(albumView.render).toHaveBeenCalled();

            expect(albumView.getAlbumTemplate).toHaveBeenCalled();
            expect(albumView.draw).toHaveBeenCalled();

            expect(albumView.getPictureTemplate).toHaveBeenCalled();
            expect(albumView.drawPictures).toHaveBeenCalled();

        });
    });

    it('Should have a default view mode as list', () => {
        let el = document.createElement('main');
        let albumView = new AlbumView(el);
        expect(albumView.viewMode).toContain('list');
    });
    it('Should sets a view mode', () => {
        let el = document.createElement('main');
        let albumView = new AlbumView(el);
        albumView.setViewMode('tiles');
        expect(albumView.viewMode).toContain('tiles');
    });
    it('Should sets a view mode, and add a CSS class to container', () => {
        let el = document.createElement('main');
        let albumView = new AlbumView(el);
        delayFn(() => {
            albumView.setViewMode('tiles');
            expect(albumView.getElement().classList.contains('tiles')).toBe(true);
        });
    });
    it('Should switch toggle view when user click on a button', () => {
        let el = document.createElement('main');
        let albumView = new AlbumView(el);
        spyOn(albumView, 'pickViewMode');
        delayFn(() => {
            el.querySelector('button[data-view-mode="tiles"]').click();
            expect(albumView.pickViewMode).toHaveBeenCalledWith('tiles');
            expect(albumView.viewMode).toContain('tiles');
        });
    });
    it('Should attach events on view-mode toggle buttons when album it is drawn', () => {
        let el = document.createElement('main');
        let albumView = new AlbumView(el);
        spyOn(albumView, 'bindEvents');
        delayFn(() => {
            expect(albumView.bindEvents).toHaveBeenCalled();
        });
    });
    it('Should add an active CSS class to current view-mode button', () => {
        let el = document.createElement('main');
        let albumView = new AlbumView(el);
        delayFn(() => {
            const currentButton = el.querySelector(`button[data-view-mode="${albumView.viewMode}"]`);

            expect(currentButton.classList.contains('active')).toBe(true);
        });
    })
    it('Should add an active CSS class to picked view-mode button and removes active class to other buttons', () => {
        let el = document.createElement('main');
        let albumView = new AlbumView(el);
        delayFn(() => {
            const listButton = el.querySelector('button[data-view-mode="list"]');
            const tilesButton = el.querySelector('button[data-view-mode="tiles"]');

            tilesButton.click();

            expect(tilesButton.classList.contains('active')).toBe(true);
            expect(listButton.classList.contains('active')).toBe(false);
        });
    });
    it('Should have a dispose function that unbinds any events and clears the content', () => {
        let el = document.createElement('main');
        let albumView = new AlbumView(el);

        spyOn(albumView, 'unbindEvents');

        delayFn(() => {
            albumView.dispose();
            expect(albumView.unbindEvents).toHaveBeenCalled();
            expect(albumView.getElement().innerHTML === '').toBe(true);
        });
    })
});
