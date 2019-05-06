from wtforms import BooleanField, HiddenField, SelectField, StringField
from wtforms.widgets import TextArea

from eNMS.forms import BaseForm
from eNMS.forms.fields import DictField


class ValidationForm(BaseForm):
    form_type = HiddenField(default="service_validation")
    abstract_service = True
    validation_method = SelectField(
        "Validation Method",
        choices=(
            ("text", "Validation by text match"),
            ("dict_equal", "Validation by dictionary equality"),
            ("dict_included", "Validation by dictionary inclusion"),
        ),
    )
    content_match = StringField(
        "Content Match", widget=TextArea(), render_kw={"rows": 5}
    )
    content_match_regex = BooleanField("Match content with Regular Expression")
    dict_match = DictField("Dictionary to Match Against")
    negative_logic = BooleanField("Negative logic")
    delete_spaces_before_matching = BooleanField("Delete Spaces before Matching")
