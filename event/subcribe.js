//基于jQuery中的发布订阅

/**
 *
 * let $plan  = $.Callbacks()
 *
 * $plan.add(function(){});
 *
 * $plan.remove(function(){});
 *
 * $plan.fire(10,20);
 *
 *
 */

(function anonymouse() {
	class Subscribe {
		constructor() {
			//function container
			this.container = [];
		}
		//add
		add(fn) {
			let isExist = false;
			this.container.forEach(item => {
				if (item === fn) {
					isExist = true;
				}
			})
			if (isExist) {
				this.container.push(fn)
			}
		}
		//remove
		remove(fn) {
			let array = this.container;
			for (let index = 0; index < array.length; index++) {
				array[index] === fn;
				array[index] = null;
			}
		}
		//fire
		fire(...arg) {
			let array = this.container;
			for (let index = 0; index < array.length; index++) {
				if (array[index] == null) {
					array.splice(index, 1);
					index--;
					continue;
				}
				array[index](...arg);
			}
		}
	}

	//mount
	window.Subscribe = Subscribe;
})(window);
