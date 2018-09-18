/*
global
alertify: false
fields: false
types: false
services: false
*/

(function() {
  for (let i = 0; i < servicesClasses.length; i++) {
    const cls = servicesClasses[i];
    $('#services').append(`<option value='${cls}'>${cls}</option>`);
  }
  buildServiceInstances();
})();

/**
 * Build select list of service instances.
 */
function buildServiceInstances() {
  $.ajax({
    type: 'POST',
    url: `/services/get_form/${$('#services').val()}`,
    success: function(result) {
      $('#html-form').html(result.form);
      for (let i = 0; i < result.instances.length; i++) {
        const instance = result.instances[i];
        $('#service-instance').append(`<option value='${instance[0]}'>${instance[1]}</option>`);
      }
    },
  });
}

/**
 * Fill form with instance values.
 */
function fillInstanceForm() {
  $.ajax({
    type: 'POST',
    url: `/services/get_form_values/${$('#service-instance').val()}`,
    success: function(result) {
      console.log(result);
    },
  });
}

/**
 * Delete a service.
 * @param {id} id - Id of the service to delete.
 */
function deleteService(id) { // eslint-disable-line no-unused-vars

}

$('#services').change(function() {
  buildServiceInstances();
  alertify.notify('ok', 'success', 5);
});

$('#service-instance').change(function() {
  fillInstanceForm();
  alertify.notify('ok', 'success', 5);
});