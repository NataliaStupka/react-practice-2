//форма через Formik

import { Formik, Form, Field } from 'formik';
import { addPublication } from './services/publicationsApi';

export const CreatePublication = () => {
    const handleSubmit = async (values, { resetForm }) => {
        try {
            await addPublication(values); //добавление публикации
            console.log(values);
            resetForm(); //сброс поля формы
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={handleSubmit}
        >
    {/* пишем пропс библиотеки, для того что бы спрятать кнопку пока отправляется добавленная публикация */}
            {({ isSubmitting }) =>
                (<Form>
                    <Field name='title' placeholder="Enter title" />
                    <Field name='text' placeholder="Enter text" />
                <button typr="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add publication'}
                   </button>
                </Form>)}
        </Formik>)
        ;

};