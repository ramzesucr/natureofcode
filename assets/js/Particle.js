
;(function(global) {
	
	/**
	 * @typedef {Object} CanvasRenderingContext2D - Canvas context
	 */

	/**
	 * @class Particle
 	 * @classdesc Represents a physics particle
 	 * @constructor
 	 * @param {Object} options Options of the particle
	 */
	var Particle = function(options) {
		this.color = options.color || 'black';
		this.radius = options.radius || 10;

		this.location = options.location || new Vector(0, 0);
		this.velocity = options.velocity || new Vector(0, 0);
		this.acceleration = options.acceleration || new Vector(0, 0);
	};

	/**
	 * Apply force to the particle
	 * @function
	 * @param  {Vector} force - Vector of force to apply
	 * @memberOf Particle
	 */
	Particle.prototype.applyForce = function(force) {
		this.acceleration.add(force);
	};

	/**
	 * Update particle state
	 * @function
	 * @memberOf Particle
	 */
	Particle.prototype.update = function() {
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	/**
	 * Draw particle
	 * @function
	 * @param  {CanvasRenderingContext2D} context - Context to draw the particle
	 * @memberOf Particle
	 */
	Particle.prototype.draw = function(context) {
		context.save();

		context.fillStyle = this.color;

		context.beginPath();
		context.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();

		context.restore();
	};

	global.Particle = Particle;

})(window);