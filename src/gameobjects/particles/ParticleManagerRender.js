/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2022 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var renderWebGL = require('../../utils/NOOP');
var renderCanvas = require('../../utils/NOOP');

if (typeof WEBGL_RENDERER)
{
    renderWebGL = require('./ParticleManagerWebGLRenderer');
}

if (typeof CANVAS_RENDERER)
{
    renderCanvas = require('./ParticleManagerCanvasRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};
