;(function(global) {

	/**
	 * @class Vector
	 * @classdesc Represents a math vector
	 * @constructor
	 * @param {number} x
	 * @param {number} y [description]
	 */
	var Vector = function(x, y) {
		this.x = x;
		this.y = y;
	};

	/**
	 * Add two vectors
	 * @function
	 * @param {Vector} v - Vector to add
	 * @memberOf Vector
	 */
	Vector.prototype.add = function(v) {
		this.x += v.x;
		this.y += v.y;
	};

	/**
	 * Subtract two vectors
	 * @function
	 * @param {Vector} v
	 * @memberOf Vector
	 */
	Vector.prototype.sub = function(v) {
		this.x -= v.x;
		this.y -= v.y;
	};

	/**
	 * Multiply vector by number
	 * @function
	 * @param {number} n
	 * @memberOf Vector
	 */
	Vector.prototype.mult = function(n) {
		this.x = this.x * n;
		this.y = this.y * n;
	};

	/**
	 * Divide vector by number
	 * @function
	 * @param {number} n
	 * @memberOf Vector
	 */
	Vector.prototype.div = function(n) {
		this.x = this.x / n;
		this.y = this.y /n;
	};

	/**
	 * Calculate magnitude of vector
	 * @function
	 * @return {number} - Magnitude of vector
	 * @memberOf Vector
	 */
	Vector.prototype.mag = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};

	/**
	 * Normalize the vector
	 * @function
	 * @memberOf Vector
	 */
	Vector.prototype.normalize = function() {
		var magnitude = this.mag();
		if(magnitude) {
			this.div(magnitude);
		}
	};


	Vector.sub = function(v1, v2) {
		return new Vector(v1.x - v2.x, v1.y - v2.y);
	};

	global.Vector = Vector;

})(window);